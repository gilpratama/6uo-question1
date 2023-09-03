var request = require("supertest");
var app = require("../app");


describe("Valid Login", function () {

    it("Login with valid account", function (done) {
        
        request(app)
            .post("/login")
            .send({
                email: "test1@6uogames.com",
                password: "password"
            })
            .expect((res) => {
                
                if (!res.body.hasOwnProperty("message"))
                    throw new Error("Expected 'message' key");

                if (!res.body.hasOwnProperty("session"))
                    throw new Error("Expected 'session' key");
            
            })
            .expect(200, done);
    
    });

});

describe("Invalid Login", function () {

    it("Handle 401 response code", function (done) {
        // Test for a response with status code 401 (Unauthenticated)
        request(app)
            .post("/login")
            .send({
                email: "incorrect@example.com",
                password: "incorrectpassword"
            })
            .expect((res) => {
                // Check for the 401 response code
                if (res.status !== 401) {
                    throw new Error("Expected status code 401");
                }

                // Check for the specific error message
                if (res.body.message !== "Email or password is incorrect.") {
                    throw new Error("Expected error message: 'Email or password is incorrect.'");
                }
            })
            .end(done);
    });

});

describe("Invalid API", function () {

    it("Handle 404 response code", function (done) {
        request(app)
            .post("/invalid_endpoint") // Use an invalid endpoint to trigger a 404
            .send({
                email: "test1@6uogames.com",
                password: "password"
            })
            .expect((res) => {
                // Add checks for the response body or other expected behavior
                // when the response code is 404
            })
            .expect((res) => {
                // Check for a response with status code 404 (Not Found)
                if (res.status !== 404) {
                    throw new Error("Expected status code 404");
                }
            })
            .end(done);
    });

});

describe("Error Server", function () {

    it("Handle 500 response code", function (done) {
        // Test for a response with status code 500 (Internal Server Error)
        request(app)
            .post("/login")
            .send({
                email: "error@example.com",
                password: "invalidpassword"
            })
            .expect((res) => {
                // Add checks for the response body or other expected behavior
                // when the response code is 500
            })
            .expect((res) => {
                // Check for a response with status code 500 (Internal Server Error)
                if (res.status !== 500) {
                    throw new Error("Expected status code 500");
                }
            })
            .end(done);
    });

});
