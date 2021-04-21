
package com.example.demo.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;


@Repository
public interface UserRepository extends CrudRepository<User,Long>,JpaRepository<User,Long> {
    public List<User> findByUserEmail(String userEmail);
    public List<User> deleteByUserEmail(String userEmail);
}
