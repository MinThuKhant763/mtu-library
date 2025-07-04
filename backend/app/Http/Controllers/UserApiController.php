<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserApiController extends Controller
{
    /** 
     * Sign up new users 
     */
    public function register(Request $request)
    {
        // Validate user input

        $validated = $request->validate([
            'name' => 'required|string|max:255',    
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        // Store new user into the database
        
        $user = new User;

        $user->name = $request->name;

        $user->email = $request->email;

        $user->password = Hash::make($request->password);

        $user->save();

        return $user; 
    }

    /**
     * Sign in user and issue token
     */
    public function login(Request $request)
    {
        // Validate user input
        
        $validated = $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required'
        ]);

        // Search the user
        $user = User::where('email', $request->email)->first();

        // Check if the passwords match
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password',
            ], 401);
        }

        // Generate token
        $token = $user->createToken('auth_token');
        
        return response()->json([
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
    }
    
    /**
     * Clear current token
     */
    public function logout(Request $request)
    {
        // Revoke the token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    /**
     * Return current user info
     */
    public function viewProfile()
    {
        // Get authenticated user
        $user = Auth::user();

        return $user;
    }
}

?>