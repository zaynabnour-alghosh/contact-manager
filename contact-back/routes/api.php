<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

//Authenticated APIS
Route::group(["middleware" => "auth:api"], function(){
    $user = Auth::user();    
    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
    });
    Route::group(["prefix" => "manage"], function(){
        Route::post('/contacts', [ContactController::class, "getContacts"]);
        Route::get('/delete_contact/{id}', [HayalaController::class, "deleteContact"]);
        Route::post('/add_contact/{action?}', [ContactController::class, "addContact"]);
        Route::post('/update', [ContactController::class, "updateContact"]);

    });
    

});

//Unauthenticated APIS
Route::group(["prefix" => "guest"], function(){
    //login & signup 
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
});
