pipeline {
    agent any

    stages {
        stage ('Install Stage') {
            steps{
                sh 'yarn install'
            }
        }
        stage ('Build Stage') {
            steps{
                sh 'yarn build'
            }
        }
        stage('Copy Stage'){
            steps{
                sh 'sudo cp -r dist/* /var/www/html/Vue/app/dist/'
            }
        }
        stage('Restart Stage'){
            steps{
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
