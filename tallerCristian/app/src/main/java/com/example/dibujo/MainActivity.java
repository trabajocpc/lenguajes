package com.example.dibujo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText boxname,boxhour;
    Button botonEnviar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        boxname=findViewById(R.id.box3);
        boxhour=findViewById(R.id.box2);
        botonEnviar=findViewById(R.id.box4);
        botonEnviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this,"guanabana",Toast.LENGTH_SHORT).show();
                int horas=Integer.parseInt(boxhour.getText().toString());
                String nombre=boxname.getText().toString();
                if (horas<=40){
                    int salario=horas*20000;
                    String mesanje="señor "+nombre+" su salario fue de: "+salario;
                    Toast.makeText(MainActivity.this,mesanje,Toast.LENGTH_SHORT).show();
                }
                else{
                    int horasExtra=horas-40;
                    int salario=800000+(horasExtra*25000);
                    String mesanje="señor "+nombre+" su salario fue de: "+salario;
                    Toast.makeText(MainActivity.this,mesanje,Toast.LENGTH_SHORT).show();

                }
            }
        });

    }
}