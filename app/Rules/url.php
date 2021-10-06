<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class url implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */    
    private $tipoURL;

    public function __construct($type)
    {
        $this->tipoURL = $type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        dd("teste: ".$this->tipoURL);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
    private function httpValidator(){
        
    }
    private function httpsValidator(){

    }
    private function urlValidator(){

    }
}
