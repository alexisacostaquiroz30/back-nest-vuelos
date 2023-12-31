PGDMP  &    9        	    
    {            reserva    16.0    16.0 9    #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            $           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            %           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            &           1262    16498    reserva    DATABASE     z   CREATE DATABASE reserva WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE reserva;
                postgres    false            �            1259    16514 
   aereolinea    TABLE     z   CREATE TABLE public.aereolinea (
    "idAereolinea" integer NOT NULL,
    nombre_aereolinea character varying NOT NULL
);
    DROP TABLE public.aereolinea;
       public         heap    postgres    false            �            1259    16532    aereolinea_idAereolinea_seq    SEQUENCE     �   CREATE SEQUENCE public."aereolinea_idAereolinea_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."aereolinea_idAereolinea_seq";
       public          postgres    false    218            '           0    0    aereolinea_idAereolinea_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."aereolinea_idAereolinea_seq" OWNED BY public.aereolinea."idAereolinea";
          public          postgres    false    222            �            1259    16507    aereopuerto    TABLE     }   CREATE TABLE public.aereopuerto (
    "idAereopuerto" integer NOT NULL,
    nombre_aereopuerto character varying NOT NULL
);
    DROP TABLE public.aereopuerto;
       public         heap    postgres    false            �            1259    16530    aereopuerto_idAereopuerto_seq    SEQUENCE     �   CREATE SEQUENCE public."aereopuerto_idAereopuerto_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."aereopuerto_idAereopuerto_seq";
       public          postgres    false    217            (           0    0    aereopuerto_idAereopuerto_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."aereopuerto_idAereopuerto_seq" OWNED BY public.aereopuerto."idAereopuerto";
          public          postgres    false    221            �            1259    16523    avion    TABLE     �   CREATE TABLE public.avion (
    "idAvion" integer NOT NULL,
    serial_avion character varying(10) NOT NULL,
    numero_asientos integer NOT NULL,
    id_aereolinea integer NOT NULL,
    numero_filas integer
);
    DROP TABLE public.avion;
       public         heap    postgres    false            �            1259    16522    avion_idAvion_seq    SEQUENCE     �   CREATE SEQUENCE public."avion_idAvion_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."avion_idAvion_seq";
       public          postgres    false    220            )           0    0    avion_idAvion_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."avion_idAvion_seq" OWNED BY public.avion."idAvion";
          public          postgres    false    219            �            1259    16544    reserva    TABLE     �   CREATE TABLE public.reserva (
    "idReserva" integer NOT NULL,
    id_vuelo integer,
    id_cliente integer,
    numero_fila integer NOT NULL,
    numero_asiento integer NOT NULL
);
    DROP TABLE public.reserva;
       public         heap    postgres    false            �            1259    16543    reserva_idReserva_seq    SEQUENCE     �   CREATE SEQUENCE public."reserva_idReserva_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."reserva_idReserva_seq";
       public          postgres    false    224            *           0    0    reserva_idReserva_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."reserva_idReserva_seq" OWNED BY public.reserva."idReserva";
          public          postgres    false    223            �            1259    16500    usuario    TABLE     �   CREATE TABLE public.usuario (
    "idUsuario" integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    telefono character varying(10) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    16499    usuario_idUsuario_seq    SEQUENCE     �   CREATE SEQUENCE public."usuario_idUsuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."usuario_idUsuario_seq";
       public          postgres    false    216            +           0    0    usuario_idUsuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."usuario_idUsuario_seq" OWNED BY public.usuario."idUsuario";
          public          postgres    false    215            �            1259    16552    vuelo    TABLE     S  CREATE TABLE public.vuelo (
    "idVuelo" integer NOT NULL,
    numero_vuelo character varying(50) NOT NULL,
    id_avion integer,
    id_origen integer,
    id_destino integer,
    fecha_salida timestamp without time zone NOT NULL,
    fecha_llegada timestamp without time zone NOT NULL,
    fecha_creacion timestamp without time zone
);
    DROP TABLE public.vuelo;
       public         heap    postgres    false            �            1259    16551    vuelo_idVuelo_seq    SEQUENCE     �   CREATE SEQUENCE public."vuelo_idVuelo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."vuelo_idVuelo_seq";
       public          postgres    false    226            ,           0    0    vuelo_idVuelo_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."vuelo_idVuelo_seq" OWNED BY public.vuelo."idVuelo";
          public          postgres    false    225            k           2604    16533    aereolinea idAereolinea    DEFAULT     �   ALTER TABLE ONLY public.aereolinea ALTER COLUMN "idAereolinea" SET DEFAULT nextval('public."aereolinea_idAereolinea_seq"'::regclass);
 H   ALTER TABLE public.aereolinea ALTER COLUMN "idAereolinea" DROP DEFAULT;
       public          postgres    false    222    218            j           2604    16531    aereopuerto idAereopuerto    DEFAULT     �   ALTER TABLE ONLY public.aereopuerto ALTER COLUMN "idAereopuerto" SET DEFAULT nextval('public."aereopuerto_idAereopuerto_seq"'::regclass);
 J   ALTER TABLE public.aereopuerto ALTER COLUMN "idAereopuerto" DROP DEFAULT;
       public          postgres    false    221    217            l           2604    16526    avion idAvion    DEFAULT     r   ALTER TABLE ONLY public.avion ALTER COLUMN "idAvion" SET DEFAULT nextval('public."avion_idAvion_seq"'::regclass);
 >   ALTER TABLE public.avion ALTER COLUMN "idAvion" DROP DEFAULT;
       public          postgres    false    220    219    220            m           2604    16547    reserva idReserva    DEFAULT     z   ALTER TABLE ONLY public.reserva ALTER COLUMN "idReserva" SET DEFAULT nextval('public."reserva_idReserva_seq"'::regclass);
 B   ALTER TABLE public.reserva ALTER COLUMN "idReserva" DROP DEFAULT;
       public          postgres    false    224    223    224            i           2604    16503    usuario idUsuario    DEFAULT     z   ALTER TABLE ONLY public.usuario ALTER COLUMN "idUsuario" SET DEFAULT nextval('public."usuario_idUsuario_seq"'::regclass);
 B   ALTER TABLE public.usuario ALTER COLUMN "idUsuario" DROP DEFAULT;
       public          postgres    false    216    215    216            n           2604    16555    vuelo idVuelo    DEFAULT     r   ALTER TABLE ONLY public.vuelo ALTER COLUMN "idVuelo" SET DEFAULT nextval('public."vuelo_idVuelo_seq"'::regclass);
 >   ALTER TABLE public.vuelo ALTER COLUMN "idVuelo" DROP DEFAULT;
       public          postgres    false    226    225    226                      0    16514 
   aereolinea 
   TABLE DATA           G   COPY public.aereolinea ("idAereolinea", nombre_aereolinea) FROM stdin;
    public          postgres    false    218   �C                 0    16507    aereopuerto 
   TABLE DATA           J   COPY public.aereopuerto ("idAereopuerto", nombre_aereopuerto) FROM stdin;
    public          postgres    false    217   �C                 0    16523    avion 
   TABLE DATA           f   COPY public.avion ("idAvion", serial_avion, numero_asientos, id_aereolinea, numero_filas) FROM stdin;
    public          postgres    false    220   uD                 0    16544    reserva 
   TABLE DATA           a   COPY public.reserva ("idReserva", id_vuelo, id_cliente, numero_fila, numero_asiento) FROM stdin;
    public          postgres    false    224   �D                 0    16500    usuario 
   TABLE DATA           K   COPY public.usuario ("idUsuario", nombre, apellidos, telefono) FROM stdin;
    public          postgres    false    216   E                  0    16552    vuelo 
   TABLE DATA           �   COPY public.vuelo ("idVuelo", numero_vuelo, id_avion, id_origen, id_destino, fecha_salida, fecha_llegada, fecha_creacion) FROM stdin;
    public          postgres    false    226   �E       -           0    0    aereolinea_idAereolinea_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."aereolinea_idAereolinea_seq"', 5, true);
          public          postgres    false    222            .           0    0    aereopuerto_idAereopuerto_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."aereopuerto_idAereopuerto_seq"', 5, true);
          public          postgres    false    221            /           0    0    avion_idAvion_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."avion_idAvion_seq"', 8, true);
          public          postgres    false    219            0           0    0    reserva_idReserva_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."reserva_idReserva_seq"', 10, true);
          public          postgres    false    223            1           0    0    usuario_idUsuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."usuario_idUsuario_seq"', 5, true);
          public          postgres    false    215            2           0    0    vuelo_idVuelo_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."vuelo_idVuelo_seq"', 12, true);
          public          postgres    false    225            s           2606    16513 *   aereopuerto PK_137339ed5b64fe684e788f52452 
   CONSTRAINT     w   ALTER TABLE ONLY public.aereopuerto
    ADD CONSTRAINT "PK_137339ed5b64fe684e788f52452" PRIMARY KEY ("idAereopuerto");
 V   ALTER TABLE ONLY public.aereopuerto DROP CONSTRAINT "PK_137339ed5b64fe684e788f52452";
       public            postgres    false    217            x           2606    16528 $   avion PK_64a3623e5c873901ddf47c0b17a 
   CONSTRAINT     k   ALTER TABLE ONLY public.avion
    ADD CONSTRAINT "PK_64a3623e5c873901ddf47c0b17a" PRIMARY KEY ("idAvion");
 P   ALTER TABLE ONLY public.avion DROP CONSTRAINT "PK_64a3623e5c873901ddf47c0b17a";
       public            postgres    false    220            ~           2606    16557 $   vuelo PK_81b6382097547197efb4abd39cb 
   CONSTRAINT     k   ALTER TABLE ONLY public.vuelo
    ADD CONSTRAINT "PK_81b6382097547197efb4abd39cb" PRIMARY KEY ("idVuelo");
 P   ALTER TABLE ONLY public.vuelo DROP CONSTRAINT "PK_81b6382097547197efb4abd39cb";
       public            postgres    false    226            u           2606    16520 )   aereolinea PK_855eece1021839bdd01673937ad 
   CONSTRAINT     u   ALTER TABLE ONLY public.aereolinea
    ADD CONSTRAINT "PK_855eece1021839bdd01673937ad" PRIMARY KEY ("idAereolinea");
 U   ALTER TABLE ONLY public.aereolinea DROP CONSTRAINT "PK_855eece1021839bdd01673937ad";
       public            postgres    false    218            {           2606    16549 &   reserva PK_bd0e1407fbd81f816dfa262f4cc 
   CONSTRAINT     o   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT "PK_bd0e1407fbd81f816dfa262f4cc" PRIMARY KEY ("idReserva");
 R   ALTER TABLE ONLY public.reserva DROP CONSTRAINT "PK_bd0e1407fbd81f816dfa262f4cc";
       public            postgres    false    224            p           2606    16505 &   usuario PK_d3a13a30136d3eed99359b4b1c3 
   CONSTRAINT     o   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "PK_d3a13a30136d3eed99359b4b1c3" PRIMARY KEY ("idUsuario");
 R   ALTER TABLE ONLY public.usuario DROP CONSTRAINT "PK_d3a13a30136d3eed99359b4b1c3";
       public            postgres    false    216            v           1259    16534    aereolinea_pkey    INDEX     W   CREATE UNIQUE INDEX aereolinea_pkey ON public.aereolinea USING btree ("idAereolinea");
 #   DROP INDEX public.aereolinea_pkey;
       public            postgres    false    218            y           1259    16529 
   avion_pkey    INDEX     H   CREATE UNIQUE INDEX avion_pkey ON public.avion USING btree ("idAvion");
    DROP INDEX public.avion_pkey;
       public            postgres    false    220            |           1259    16550    reserva_pkey    INDEX     N   CREATE UNIQUE INDEX reserva_pkey ON public.reserva USING btree ("idReserva");
     DROP INDEX public.reserva_pkey;
       public            postgres    false    224            q           1259    16506    usuario_pkey    INDEX     N   CREATE UNIQUE INDEX usuario_pkey ON public.usuario USING btree ("idUsuario");
     DROP INDEX public.usuario_pkey;
       public            postgres    false    216                       1259    16558 
   vuelo_pkey    INDEX     H   CREATE UNIQUE INDEX vuelo_pkey ON public.vuelo USING btree ("idVuelo");
    DROP INDEX public.vuelo_pkey;
       public            postgres    false    226            �           2606    16579 $   vuelo FK_200ce4782d2cfae7dcdafe2592a    FK CONSTRAINT     �   ALTER TABLE ONLY public.vuelo
    ADD CONSTRAINT "FK_200ce4782d2cfae7dcdafe2592a" FOREIGN KEY (id_origen) REFERENCES public.aereopuerto("idAereopuerto");
 P   ALTER TABLE ONLY public.vuelo DROP CONSTRAINT "FK_200ce4782d2cfae7dcdafe2592a";
       public          postgres    false    4723    226    217            �           2606    16569 &   reserva FK_2dad8e4ccf47191a290e468c7ed    FK CONSTRAINT     �   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT "FK_2dad8e4ccf47191a290e468c7ed" FOREIGN KEY (id_cliente) REFERENCES public.usuario("idUsuario");
 R   ALTER TABLE ONLY public.reserva DROP CONSTRAINT "FK_2dad8e4ccf47191a290e468c7ed";
       public          postgres    false    4720    216    224            �           2606    16559 $   avion FK_718f9f3e7c8186b228430e5bd41    FK CONSTRAINT     �   ALTER TABLE ONLY public.avion
    ADD CONSTRAINT "FK_718f9f3e7c8186b228430e5bd41" FOREIGN KEY (id_aereolinea) REFERENCES public.aereolinea("idAereolinea");
 P   ALTER TABLE ONLY public.avion DROP CONSTRAINT "FK_718f9f3e7c8186b228430e5bd41";
       public          postgres    false    4725    220    218            �           2606    16564 $   vuelo FK_bea47709b7499b1c52a1bd8f30d    FK CONSTRAINT     �   ALTER TABLE ONLY public.vuelo
    ADD CONSTRAINT "FK_bea47709b7499b1c52a1bd8f30d" FOREIGN KEY (id_avion) REFERENCES public.avion("idAvion");
 P   ALTER TABLE ONLY public.vuelo DROP CONSTRAINT "FK_bea47709b7499b1c52a1bd8f30d";
       public          postgres    false    4728    226    220            �           2606    16574 &   reserva FK_d2ec6c5b50ea3b56cc91f91176b    FK CONSTRAINT     �   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT "FK_d2ec6c5b50ea3b56cc91f91176b" FOREIGN KEY (id_vuelo) REFERENCES public.vuelo("idVuelo");
 R   ALTER TABLE ONLY public.reserva DROP CONSTRAINT "FK_d2ec6c5b50ea3b56cc91f91176b";
       public          postgres    false    224    4734    226            �           2606    16584 $   vuelo FK_f064f523e8d87c27045bf6d3773    FK CONSTRAINT     �   ALTER TABLE ONLY public.vuelo
    ADD CONSTRAINT "FK_f064f523e8d87c27045bf6d3773" FOREIGN KEY (id_destino) REFERENCES public.aereopuerto("idAereopuerto");
 P   ALTER TABLE ONLY public.vuelo DROP CONSTRAINT "FK_f064f523e8d87c27045bf6d3773";
       public          postgres    false    217    4723    226               :   x�3�t,�L�KN�2��I,I��2�tM,�t˩�2���K��2�N,I�K����� no�         y   x�3�t���Sp�Qp�/JL��2�8����+8��e��$*8%�ޜ�e�JLKL�Q�;�����*.��W~��
��E��&*8�\��_��e
��(/��$_�9��$��8��+F��� x�*x         O   x�e���0ki8[�IR���A
��Կ$��Mf���ԇh�@muk�D �+�i��k}����w�|����N��         9   x�-��  �w;�����
!�\�t�!��N��*��Ң1�\�^w�|��	�         u   x�Eͱ�0���އ1���Htv9b�K�ޤT�^����CE�vЩ�l�k*�,�ԣ 
�����f�k��xd	�N!�-ϰpm���YtSAZf�o֭6�����x����?3%�          `   x����	�0���l6����f^<��� ��g�sL�H	���%jQ}�$?S}�敶Yb��y�1U�W˾Y��5�"� �]D�     