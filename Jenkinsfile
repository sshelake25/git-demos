pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('buildc for test') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
