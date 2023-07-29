<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
  
    protected $fillable = [
        "designation",
        "qte",
        "seuil",
        "peremption",
        "conditionnement",
        "categorie_id"
    ];

    public function categorie(){
        return $this->BelongsTo(Categorie::class);
    }

    public function consultations(){
        return $this->belongsToMany(Consultation::class,'consultation_produits')->withPivot('posologie')->withTimestamps();
    }
}
