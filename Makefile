.PHONY: all install d dep dependencias p perm permisos c conf configuraciones \
a apache c cert certificado serve clean

all: install

install: dependencias permisos configuraciones apache certificado

d dep dependencias:
	./desplegar.sh -d

p perm permisos:
	./desplegar.sh -p

c conf configuraciones:
	./desplegar.sh -c

a apache:
	./desplegar.sh -a

c cert certificado:
	./desplegar.sh -s -y

serve:
	ng serve

clean:
	echo ''
	#find 'tmp' -not -path 'runtime' -not -name ".gitkeep" -exec rm -Rf {} \; || echo ''
