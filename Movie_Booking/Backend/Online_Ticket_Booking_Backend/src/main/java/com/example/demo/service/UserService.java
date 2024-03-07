package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.repo = userRepository;
    }

    // to save the user to the database
    public User saveUser(User user) {
        return repo.save(user);
    }

    // get the user by user ID
    public User getUserById(int id) {
        return repo.findById(id).orElse(null);
    }

//    public User login(String username, String password) {
//        List<User> users = repo.findByUsernameAndPassword(username, password);
//
//        if (!users.isEmpty()) {
//            // Assuming you want to return the first user if multiple users have the same credentials
//            return users.get(0);
//        } 
//        else {
//            // No user found
//            return null;
//        }
//    }
    
    public User getLogin(String uid,String pwd)
	{
		User l;
		Optional<User> ol=repo.getLogin(uid, pwd);
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		
		return l;
	}

	public User save (User l)
	{
		return repo.save(l);
	}
}
