<?php
  namespace DB;
  require_once(__DIR__.'/DbConnector.php');
  require_once(__DIR__.'/static/us-states.php');

  /**
   * Class Account Model
   */
  class AccountModel {

    private static $_tableName = 'tb_account';
    private $_id = 0;
    private $_firstName = '';
    private $_lastName = '';
    private $_email = '';
    private $_zipCode = '';
    private $_state = 0;
    private $_dbConnector = null;

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

    public function saveNew() {
      $pdo = $this->_dbConnector->getPdo();
      $data = $pdo->prepare(
          "INSERT INTO ".self::$_tableName." (firstName, lastName, email, zipCode, state) VALUES (?, ?, ?,?,?)");

      try {
        $pdo->beginTransaction();

        $data->bindParam(1, $this->_firstName);
        $data->bindParam(2, $this->_lastName);
        $data->bindParam(3, $this->_email);
        $data->bindParam(4, $this->_zipCode);
        $data->bindParam(5, $this->_state);    
        $data->execute();

        $pdo->commit();

        return $data->rowCount();

      } catch (\PDOException $e) {
        $pdo->rollback();

        throw $e;
      }
    }

  }

?>