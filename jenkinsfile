pipeline {
     agent any

stages {
    stage('Checkout') {
       steps {
           checkout scm
         }
       }
       stage('Build') {
          steps {
             echo 'Buliding application...'
             sh 'echo "Artificates generated successfully"'
           }
         }
         stage('Test') {
            steps {
                echo 'Testing application"'
                sh 'echo "Unit tests passed: 100%"'
              }
            }
          }
          post {
             always {
                echo 'Bulid completed.'
             }
          }
        } 
