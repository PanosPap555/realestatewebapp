package com.rewebapp.rewebappbackend.controller;

import com.rewebapp.rewebappbackend.data.EmailResponse;
import com.rewebapp.rewebappbackend.repository.UserRepo;
import com.rewebapp.rewebappbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

    private final UserService userService;

    @GetMapping("/email/{username}")
    public ResponseEntity<EmailResponse> getUserEmail(@PathVariable String username){
        return ResponseEntity.ok(userService.getEmail(username));
    }
}
