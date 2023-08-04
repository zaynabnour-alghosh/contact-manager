<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;

class ContactController extends Controller
{
    function addOrUpdateContact(Request $request, $action = "add"){
        $token = $request->token;
        $user_id =Auth::getPayload($token)->get('sub');       
        if($action == "add"){
            $contact = new Contact;
        }else{
            $contact = Contact::where("user_id",$user_id);
        }
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->address_longitude = $request->address_longitude;
        $contact->address_lattitude = $request->address_lattitude;
        $contact->user_id=$user_id;
        $contact->save();

        return response()->json([
            'status' => 'Success',
            'contact-data' => $contact
        ]);
    }

}