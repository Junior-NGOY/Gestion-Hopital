<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rdvs', function (Blueprint $table) {
            $table->id();
            $table->date('dateRDV');
            $table->time('heureRDV');
            $table->enum('type', ['Consultation', 'Controle']);
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('patient_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnUpdate('cascade')->restrictOnDelete();
            $table->foreign('patient_id')->references('id')->on('patients')->cascadeOnUpdate('cascade')->restrictOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rdvs');
    }
};
