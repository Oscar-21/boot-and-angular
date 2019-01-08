package com.jdriven.ng2boot.models;

/**
 * Session
 */
public class Session {
  int id;
  String name;
  String presenter;
  int duration;
  String level;
  String abstractText;
  String[] voters;

  public Session() {
    
  }

  public Session(int id, String name, String presenter, int duration, String level,
      String abstractText, String[] voters) {
    this.id = id;
    this.name = name;
    this.presenter = presenter;
    this.duration = duration;
    this.level = level;
    this.abstractText = abstractText;
    this.voters = voters;
  }

  /**
   * @return the abstractText
   */
  public String getAbstractText() {
    return abstractText;
  }

  /**
   * @return the duration
   */
  public int getDuration() {
    return duration;
  }

  /**
   * @return the id
   */
  public int getId() {
    return id;
  }

  /**
   * @return the level
   */
  public String getLevel() {
    return level;
  }

  /**
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * @return the presenter
   */
  public String getPresenter() {
    return presenter;
  }

  /**
   * @return the voters
   */
  public String[] getVoters() {
    return voters;
  }

}
