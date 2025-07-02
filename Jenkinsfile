pipeline {
    agent any

    environment {
        IMAGE_NAME = 'valuebook-site'
        CONTAINER_NAME = 'valuebook-container'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/manzarvicky/valuebook.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true
                docker run -d --name $CONTAINER_NAME -p 8090:80 $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo 'Website successfully deployed in Docker container.'
        }
        failure {
            echo 'Something went wrong.'
        }
    }
}
