var service = require('../static_codegen/proto/Student_grpc_pb');
var message = require('../static_codegen/proto/Student_pb');

var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.StudentServiceService,{
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrpperByages: getStudentsWrpperByages,
    biTalk: biTalk

});


server.bind('localhost:8899',grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call,callback){
    console.log("call:",call.request.getUsername());

    var myResponse = new message.MyResponse();
    myResponse.setRealname('赵六')
    // callback(null,{realname:'我是客户端刘尚'})
    callback(null,myResponse);
}

function getStudentsByAge(){

}

function getStudentsWrpperByages() {

}

function biTalk() {

}