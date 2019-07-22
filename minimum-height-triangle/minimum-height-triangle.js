process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function lowestTriangle(base, area){
    
    return Math.ceil(2 * area / base)
}

function main() {
    var base_temp = readLine().split(' ');
    var base = parseInt(base_temp[0]);
    var area = parseInt(base_temp[1]);
    var height = lowestTriangle(base, area);
    process.stdout.write(""+height+"\n");

}

