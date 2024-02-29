#!/bin/sh

echo Running entrypoint.sh

openssl s_client -connect host.docker.internal:8081 </dev/null 2>/dev/null|openssl x509 -outform PEM >mycertfile.crt
cp mycertfile.crt /usr/local/share/ca-certificates
update-ca-certificates > /tmp/update-ca-certificates-result.txt
rm mycertfile.crt


#################################################################################################################

"$@"