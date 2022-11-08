<?php

  namespace DB;
  use \PDO;

  /**
   * Connect to MySQL using PDO
   */
  class DbConnector {

    /**
     * static class instance
     */
    private static $_instance = null;


    public static function getInstance():DbConnector {
      if(!isset(self::$_instance)) {
        self::$_instance = new Static();
      }
      return self::$_instance;
    }


    protected function __construct() {
      $dsn = 'mysql:dbname=db_assessment;host=localhost:3306';
      $dbUser = 'wave';
      $dbPassword = 'cloud';
      try {
        $this->_pdo = new PDO($dsn, $dbUser, $dbPassword);
      } catch(\Exception $e) {
        echo($e);
        echo('Fatal Error..Exit');
        exit;
      }
    }


    protected function __clone() {

    }


    public function __wakeup() {
      throw new Exception('Not Allowed!');
    }

    
    public function getPdo() {
      return $this->_pdo;
    }
  }
?>
