<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examen extends Model
{
    use HasFactory;
    
    protected $fillable = ['partie', 'type'];

    public function Detail(){
        return $this->hasMany(Detail::class);
    }
}
