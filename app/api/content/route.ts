const posts =
[  {    "title": "Primer ejemplo de título",    "content": "Este es el contenido del primer post de ejemplo.",    "slug": "primer-ejemplo-de-titulo"  },  {    "title": "Segundo ejemplo de título",    "content": "Este es el contenido del segundo post de ejemplo.",    "slug": "segundo-ejemplo-de-titulo"  },  {    "title": "Tercer ejemplo de título",    "content": "Este es el contenido del tercer post de ejemplo.",    "slug": "tercer-ejemplo-de-titulo"  }]

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

    export async function GET(){
        const session = await getServerSession()
        console.log(session)
        return NextResponse.json(posts)

    }