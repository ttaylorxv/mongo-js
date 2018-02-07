#!groovy
import hudson.model.*


try {
    node {
       
        def branch = BRANCH_NAME.toLowerCase();
        def source = BRANCH_NAME
        if (branch.contains('/')){
            branch = branch.substring(branch.lastIndexOf("/") + 1)
        }
 
        stage('checkout-and-test') {
            checkout scm
      
            sh """oc process -f nodejs-mongo-jenkinspipe.json -p NAME=$branch -p SOURCE_REPOSITORY_URL=https://github.com/ttaylorxv/tickHW.git -p SOURCE_REPOSITORY_REF=$source -p DATABASE_NAME=$branch -p DATABASE_SERVICE_NAME=$branch-mongodb -lapp=$branch | oc apply -f - | oc create -f -"""
           
            //openshiftBuild apiURL: '', authToken: '', bldCfg: """$branch""", buildName: '', checkForTriggeredDeployments: 'true', commitID: '', namespace: '', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
            
        }
        
    }
} catch (err) {
    echo "in catch block"
    echo "Caught: ${err}"
    currentBuild.result = 'FAILURE'
    throw err
}
