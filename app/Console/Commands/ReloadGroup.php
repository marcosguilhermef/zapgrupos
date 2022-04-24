<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\gruposWhatsApp;
class ReloadGroup extends Command
{
    protected $grupo;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reload:group {id} {url?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Recarregar dados do grupo';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $id  = $this->argument('id');
        $url = @$this->argument('url');
        if($url == null){
            $grupo = gruposWhatsApp::find($id)->toArray();
            print('java -jar '.env("JAVA_BOT")." -re ".$id." ".$grupo["url"]);
            $a = shell_exec('java -jar '.env("JAVA_BOT")." -re ".$id." ".$grupo["url"]);
            print_r($a);
            return 0;
        }
        print('java -jar '.env("JAVA_BOT")." -re $id $url");
        $a = shell_exec('java -jar '.env("JAVA_BOT")." -re $id $url");
        print_r($a);
        return 0;
    }
}
