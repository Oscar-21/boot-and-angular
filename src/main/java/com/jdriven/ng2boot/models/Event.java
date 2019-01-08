package com.jdriven.ng2boot.models;

import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Event
 */
public class Event {
  private int id;
  private String name;
  @Temporal(TemporalType.DATE)
  private Date date;
  private String time;
  private double price;
  private String imageUrl;
  private Location location;
  private String onlineUrl;
  private Session[] sessions;

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public Location getLocation() {
    return location;
  }

  public void setLocation(Location location) {
    this.location = location;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getOnlineUrl() {
    return onlineUrl;
  }

  public void setOnlineUrl(String onlineUrl) {
    this.onlineUrl = onlineUrl;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public Session[] getSessions() {
    return sessions;
  }

  public void setSessions(Session[] sessions) {
    this.sessions = sessions;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }
}
