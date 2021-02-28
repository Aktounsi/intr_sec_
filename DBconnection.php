<?php defined('_DEFVAR') or exit('Restricted Access');
try{$bdd = new PDO('mysql:host=localhost;dbname=intr_sec;charset=utf8','root','');
            } 
            catch(Exception $e){
                die('erreur de connexion à la bdd : '.$e->getMessage());
            }
            ?>
