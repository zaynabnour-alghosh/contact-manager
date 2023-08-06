<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;

class ContactController extends Controller
{
    function addContact(Request $request){         
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->address_longitude = $request->address_longitude;
        $contact->address_latitude = $request->address_latitude;       
        $contact->save();
        return response()->json([
            'status' => 'Success',
            'contact-data' => $contact
        ]);
    }

    function getContacts(Request $request){
        $contacts = Contact::all();        
        return response()->json([
            'status' => 'Success',            
            'contact_data' =>$contacts
        ]);
    }

    function deleteCon($id){
        $contact = Contact::find($id)->delete();
        return response()->json(["contact" => $contact]);
        
    }
    function getContactOfId($id){
        $contact = Contact::find($id);
        return response()->json(["contact" => $contact]);
    }
}