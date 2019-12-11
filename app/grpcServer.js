/**
 1指定好protoc文件的位置
 2引入grpc的第三方库
 3读取文件grpc相应的方法然后找到proto文件定义的StudentService的服务就可以调用里面特定的方法
 */
var PROTO_FILE_PATH ="D:\\WebstormProjects\\grpc_demo\\proto\\Student.proto"
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.liushang.proto;

var server  = new grpc.Server();

server.addService(grpcService.StudentService.service,{
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrpperByages: getStudentsWrpperByages,
    biTalk: biTalk

});

server.bind('localhost:8899',grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call,callback){
    console.log("call:",call.request.username);

    callback(null,{realname:'我是客户端刘尚'})
}

function getStudentsByAge(){
    
}

function getStudentsWrpperByages() {
    
}

function biTalk() {
    
}