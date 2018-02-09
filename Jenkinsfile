#!groovy
import hudson.model.*


try {
    node {
       // Read payload which is a submitted JSON request from github and write to temp file
       sh 'echo "$payload" >> tempGitFile.json'
       // From the temp file place into variable
       def fromgithook = readJSON file: 'tempGitFile.json'
       // find branch name and set to lower case for environment variables
       def branch = fromgithook.ref
        /*def branch = BRANCH_NAME.toLowerCase();
        def source = BRANCH_NAME*/
        if (branch.contains('/')){
            branch = branch.substring(branch.lastIndexOf("/") + 1)
        }
 
        stage('checkout-and-test') {
            checkout scm
      
            sh """oc process -f nodejs.json -p NAME=$branch -p SOURCE_REPOSITORY_URL=https://github.com/ttaylorxv/nodejs.git -p SOURCE_REPOSITORY_REF=$source -lapp=$branch | oc apply -f -"""
            //sh """oc create -f nodejs-mongo-jenkinspipe.json"""
            //sh """oc new-app nodejs-mongo-jenkinspipe"""
            //sh """oc start-build $branch""""
            //sh """oc deploy $branch --latest"""
           
            //openshiftBuild apiURL: '', authToken: '', bldCfg: """$branch""", buildName: '', checkForTriggeredDeployments: 'true', commitID: '', namespace: '', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
            
        }
        
    }
} catch (err) {
    echo "in catch block"
    echo "Caught: ${err}"
    currentBuild.result = 'FAILURE'
    throw err
}
