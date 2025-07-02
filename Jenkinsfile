pipeline {
    agent any

    environment {
        // Define environment variables
        APP_NAME = 'ValueBook'
        DOCKER_IMAGE = 'valuebook'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Get code from repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Code Quality') {
            steps {
                // Run ESLint for code quality checks
                sh 'npm run lint || true'
            }
        }

        stage('Build') {
            steps {
                // Build the application
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop existing container if running
                    sh 'docker-compose down || true'
                    
                    // Start new container
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Health Check') {
            steps {
                // Wait for container to be ready
                sh 'sleep 10'
                
                // Check if application is responding
                sh 'curl -f http://localhost:3000 || exit 1'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            // Cleanup on failure
            sh 'docker-compose down || true'
        }
        always {
            // Clean workspace after build
            cleanWs()
        }
    }