var fs = require("fs");
var path = require("path");
var config = require("./config");

describe('Data is loaded',function (){
    it('should show some students', function (){
        browser
            .get(config.getAppUrl())
            .then(function (){
                element
                    .all(by.repeater('student in students'))
                    .then(function (students){
                        browser
                            .takeScreenshot()
                            .then(function (png){
                                var stream = fs.createWriteStream(path.join(process.cwd(),'test','outputstudents','student-01.png'));
                                stream.write(new Buffer(png,'base64'));
                                stream.end();
                            });
                        
                        expect(students.length).toBeGreaterThan(0);
                    });
            });
        
        
    }); 
});