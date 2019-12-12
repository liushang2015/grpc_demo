# grpc_demo

动态代码dynamic_codegen
启动方式
node app/grpcServer.js
node app/grpcClient.js


静态代码static_codegen
启动方式
node app/staticGrpcServer.js
node app/staticGrpcClient.js

这是节点示例的静态代码生成变体。这些示例中的代码是使用protoc和Node gRPC protoc插件预生成的，
生成的代码可以在各种*_pb.js文件中找到。生成这些文件的命令行顺序如下（假设protoc和grpc_node_插件存在，
并从包含此README.md文件的目录开始）：

安装命令
cd ../../protos
npm install -g grpc-tools

windows安装方式，linux不需要.cmd
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen/ --grpc_out=static_codegen --plugin=protoc-gen-grpc=C:\Users\HIAPAD\AppData\Roaming\npm\grpc_tools_node_protoc_plugin.cmd proto\Student.proto

出现的问题解决方式
https://www.codercto.com/a/24949.html

说明
Student_pb.js 存放的各种各样的消息,及消息序列化,反序列化的处理逻辑
Student_grpc_pb.js 为描述