import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
