node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build Image') {
        app = docker.build("bcreagh/proof-of-concept")
    }

    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}