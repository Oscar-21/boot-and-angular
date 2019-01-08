package com.jdriven.ng2boot.controllers;
import java.util.ArrayList;
import java.util.Date;
import com.jdriven.ng2boot.models.Event;
import com.jdriven.ng2boot.models.Location;
import com.jdriven.ng2boot.models.Session;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * EventController
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController()
public class EventController {
  
  ArrayList<Event> events = new ArrayList<Event>();

  EventController() {
    events = generateEvents();
  }

  @GetMapping("/api/v1/events")
  public ArrayList<Event> getEvents() {
    return events;
  }

  @PostMapping("/api/v1/events")
  public Event createEvent(@RequestBody Event newEvent) {
    events.add(newEvent);
    return newEvent;
  }

  @GetMapping("/api/v1/events/{id}")
  public Event getEvents(@PathVariable int id) {
    return events.stream().filter(event -> event.getId() == id).findFirst().get();
  }

  private ArrayList<Event> generateEvents() {

    Event event = new Event();
    Event event2 = new Event();
    event.setId(1);
    event.setName("Angular Connect");
    event.setDate(new Date());
    event.setTime("10:00 am");
    double price = 599.99;
    event.setPrice(price);
    String imageUrl = "/assets/images/angularconnect-shield.png";
    event.setImageUrl(imageUrl);
    String address = "1057 DT";
    String city = "London";
    String country = "England";
    event.setLocation(new Location(address, city, country));
    event.setSessions(
      new Session[] {
        new Session(
          1, 
          "Using Angular 4 Pipes", "Peter Bacon Darwin",
          1, 
          "Intermediate",
          "Learn all about the new pipes in Angular 4, both how to write them, and how to get the new AI CLI to write them for you. Given by the famous PBD, president of Angular University (formerly Oxford University)",
          new String[] {"bradgreen", "igorminar", "martinfowler"}
        ),
        new Session(
          2, 
          "Getting the most out of your dev team", 
          "Jeff Cross", 
          1, 
          "Intermediate",
          "We all know that our dev teams work hard, but with the right management they can be even more productive, without overworking them. In this session Ill show you how to get the best results from the talent you already have on staff.",
          new String[] {"johnpapa", "bradgreen", "igorminar", "martinfowler"})
      }
    );

    event2.setId(2);
    event2.setName("ng-nl");
    event2.setDate(new Date());
    event2.setTime("09:00 am");
    double price2 = 950.00;
    event2.setPrice(price2);
    String imageUrl2 = "/assets/images/ng-nl.png";
    event2.setImageUrl(imageUrl2);
    event2.setOnlineUrl("http://ng-nl.org/");
    event2.setSessions(
      new Session[] {
        new Session(
          1, 
          "Testing Angular 4 Workshop",
          "Pascal Precht & Christoph Bergdorf", 
          4, 
          "Beginner",
          "In this 6 hour workshop you will learn not only how to test Angular 4, you will also learn how to make the most of your team's efforts. Other topics will be convincing your manager that testing is a good idea, and using the new protractor tool for end to end testing.",
          new String[] {"bradgreen", "igorminar"}
        )
      }
    );
    events.add(event);
    events.add(event2);
    return events;
  }
}
