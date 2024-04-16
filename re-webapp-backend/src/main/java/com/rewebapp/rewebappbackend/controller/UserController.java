package com.rewebapp.rewebappbackend.controller;

import com.rewebapp.rewebappbackend.data.EmailResponse;
import com.rewebapp.rewebappbackend.repository.UserRepo;
import com.rewebapp.rewebappbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

    private final UserService userService;

    @GetMapping("/email")
    public ResponseEntity<EmailResponse> getUserEmail(@RequestBody Map<String, String> request){
        return ResponseEntity.ok(userService.getEmail(request.get("username")));
    }
}
