<?php
  namespace DB;
  require_once(__DIR__.'/DbConnector.php');
  require_once(__DIR__.'/static/us-states.php');

  /**
   * Class Account Model
   */
  class AccountModel {

    private $_firstName = '';
    private $_lastName = '';
    private $_email = '';
    private $_zipCode = '';
    private $_state = 0;

    public function __construct() {
      $this->_firstName = 'Alan';
      $this->_dbConnector = DbConnector::getInstance();
    }

    public static function validateEmail($email) {
      return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public static  function validateZipCode($zipCodeString) {
      return preg_match('#[0-9]{5}#', $zipCodeString);
    }

    public static  function validateState($stateCode) {
      return array_key_exists($stateCode, USE_STATES);
    }

    public function getFirstName() {
      return $this->_firstName;
    }

    public function setFirstName($firstName) {
      $this->_firstName = $firstName;
    }

    public function getLastName() {
      return $this->_lastName;
    }

    public function setLastName($lastName) {
      $this->_lastName = $lastName;
    }

    public function getEmail() {
      return $this->_email;
    }

    public function setEmail($email) {
      $this->_email = $email;
    }

    public function getZipCode() {
      return $this->_zipCode;
    }
    
    public function setZipCode($zipCode) {
      $this->_zipCode = $zipCode;
    }

    public function getState() {
      return $this->_state;
    }

    public function setState($state) {
      $this->_state = $state;
    }

  }

?>