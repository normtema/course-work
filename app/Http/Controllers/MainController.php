<?php

namespace App\Http\Controllers;
use App\Product;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function _index() {
        return view('homepage');
    }
    public function _gallery() {
        $products = Product::get();
        return view('gallery', compact('products'));
    }
    public function _about($code) {
        $about = Product::where('code', $code)->first();
        return view('about', compact('about'));
    }
    public function _project() {
        return view('project');
    }
    public function __error() {
        return view('error');
    }
    public function __result() {
        return view('result');
    }
    public function __success() {
        return view('success');
    }
}
