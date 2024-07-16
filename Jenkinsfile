pipeline {
    agent any

    environment {
        NODE_VERSION = '20.15.1'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://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@github.com/hatbuiinho/echillax.git'
            }
        }
        
        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        
        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Your deployment script/commands here, e.g.:
                sh './deploy.sh'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
