package com.jdriven.ng2boot.controllers;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AuthController
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthController {

  @RequestMapping("/api/v1/user")
  public Principal user(Principal user) {
    return user;
  }

}