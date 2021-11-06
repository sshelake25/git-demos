pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build this another test') {
            steps {
                sh 'npm --version'
                sh 'node --version'
            }
        }
    }
}
