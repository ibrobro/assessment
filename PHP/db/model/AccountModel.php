<?php
  namespace DB;
  require_once(__DIR__.'/DbConnector.php');

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

    public function validateEmail() {
      throw new \Exception('Not implemented');
    }

    public function validateZipCode() {
      throw new \Exception('Not implemented');
    }

    public function validateState() {
      throw new \Exception('Not implemented');
    }

    public function getFirstName() {
      return $this->_firstName;
    }

  }

?>