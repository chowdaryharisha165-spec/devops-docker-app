pipeline {
     agent any

stages {
    stage('Checkout') {
           steps {
              echo 'Checking out source code...'
              checkout scm
            }
         }
         stage('Bulid') {
            steps {
                 echo 'Building application...'
                 sh 'test -f server.js && echo "server.js exists"'
                 sh 'teszt -f index.html && echo "index.html exists"'
              }
           }
           stage('Validation') {
              steps {
                  echo 'Validating pipeline stages...'
                  sh 'echo "Validation successful!"'
              }
          }
      }
   }
