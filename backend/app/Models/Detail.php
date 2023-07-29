<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    protected $fillable = ['detailexam', 'examen_id'];

    public function examen(){
        return $this->belongsTo(Examen::class);
    }

    public function consultations(){
        return $this->belongsToMany(Consultation::class,'consultation_details')->withTimestamps();
    }
}
