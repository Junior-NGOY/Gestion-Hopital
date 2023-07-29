<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProduitRequest;
use App\Http\Resources\ProduitResource;
use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
  public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Produit::with('categorie')->orderBy('id', 'desc')->paginate(5);
  }
  public function destroy(Produit $produit){
      $produit->delete();
      return response()->json('Produit Deleted');
  }
  public function store(StoreProduitRequest $request){
      Produit::create($request->validated());
      return response()->json('Produit Created');
  }
  public function update(StoreProduitRequest $request, Produit $produit){
      $produit->update($request->validated());
      return response()->json('Produit Updated');
  }
  public function show(Produit $produit){
      return new ProduitResource($produit);
  }
}
