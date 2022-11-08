<?php
  // LOAD REQUIRED FILES
  require_once('db/model/AccountModel.php');

  // DATA MODEL NAMESPACE
  use DB\AccountModel as AccountModel;

  //RECEIVE and DESTRUCTURED POST DATA
  extract($_POST);
  // PREPARE RETURNED DATA
  $status = false;
  $errors = [];
  $inputErrors = [];

  try{
    //DATA VALIDATIONS
    try {
    
      if(strlen($firstName) === 0) {
        array_push($inputErrors, array('field' => 'firstName', 'message' => 'Empty first name'));
      }
      if(!AccountModel::validateEmail($email)) {
        array_push($inputErrors, array('field' => 'email', 'message' => 'Invalid E-mail Address'));
      }
      if(!AccountModel::validateState($state)) {
        array_push($inputErrors, array('field' => 'state', 'message' => 'Invalid State'));
      }
      if(!AccountModel::validateZipCode($zipCode)) {
        array_push($inputErrors, array('field' => 'zipCode', 'message' => 'Invalid Zip Code'));
      }

      if(count($inputErrors) > 0 ) {
        throw new \Exception('Input Errors');
      }

      try {
        $account = new AccountModel();
        $account->setFirstName($firstName);
        $account->setLastName($lastName);
        $account->setEmail($email);
        $account->setZipCode($zipCode);
        $account->setState($state);

        if($account->saveNew()) {
          $status = true;
        } else {
          throw new \Exception('Fail to save data');
        }

      } catch(\Exception $e) {
        throw new \Exception('Data Saving Error');
      }
      
      $status = true;
    } catch (\Exception $e) {
      throw $e;
    }

  } catch(\Exception $e) {
    array_push($errors, $e->getMessage());
  }

  // RESPONSE
  header('Content-Type: application/json; charset=utf-8');
  echo(json_encode(
      array(
        'status' => $status, 
        'errors' => $errors,
        'inputErrors' => $inputErrors,
      )
  ));
?>
