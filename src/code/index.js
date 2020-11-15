export function getCode (cmd, nome, descricao, properties = [], commands = []) {
        const cmds = commands.filter((c) => {
                return c.includes('.list.')||c.includes('.edit.')||c.includes('.add.')||c.includes('.delete.')
        });
    const comandos = {
        resource: [
`<resource>
<id>${cmd && cmd.split('.')[0]}</id>
<description>${descricao}</description>
<name>${descricao}</name>
<properties> ${properties.map( (p) => `
<property name="${p.nome}" ${p.pk == 'true' ? `pk="${p.pk}"` : ''} type="${p.type}" description="${p.descricao}"/>` )}
</properties>
<actions>${cmds.map((c) => `
<action type="${c.split('.')[1]}" ref="${c.split('.')[0]}"/>`)}
</actions>
</resource>`.replace(',', '')
        ],
        list: [
`<action>
 <id>${cmd && cmd.split('.')[0]}</id>
 <name>list ${descricao}</name>
 <description>${descricao}</description>
 <type>LIST</type>
 <ws>
 <method>GET</method>
 <href>/${cmd && cmd.split('.')[0]}</href>
 </ws>
 <impl>
 <command>dhl list ${nome}</command>
 </impl>
 <auth>
 <opt>optOpen</opt>
 </auth>
 </action>`
        ],
        edit: [
`<action>
<id>${cmd && cmd.split('.')[0]}</id>
<name>edit ${descricao}</name>
<description>${descricao}</description>
<type>EDIT</type>
<ws>
<method>PUT</method>
<href>/${cmd && cmd.split('.')[0]}/{${properties.filter((p)=> p.pk == 'true').map((p)=> p.nome)}}</href>
</ws>
<impl>
<command>dhl edit ${nome}</command>
<arguments>${properties.filter((p)=> p.pk == 'true').map((p)=> `
<argument name="${p.nome}" type="${p.type}" required="true" location="path"/>`)}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`
        ],
        add: [
`<action>
<id>${cmd && cmd.split('.')[0]}</id>
<name>add ${descricao}</name>
<description>${descricao}</description>
<type>ADD</type>
<ws>
<method>POST</method>
<href>/${cmd && cmd.split('.')[0]}/{${properties.filter((p)=> p.pk == 'true').map((p)=> p.nome)}}</href>
</ws>
<impl>
<command>dhl edit ${nome}</command>
<arguments>${properties.filter((p)=> p.pk == 'true').map((p)=> `
<argument name="${p.nome}" type="${p.type}" required="true" location="path"/>`)}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`
        ],
        delete: [
`<action>
<id>${cmd && cmd.split('.')[0]}</id>
<name>delete ${descricao}</name>
<description>${descricao}</description>
<type>DELETE</type>
<ws>
<method>DELETE</method>
<href>/${cmd && cmd.split('.')[0]}/{${properties.filter((p)=> p.pk == 'true').map((p)=> p.nome)}}</href>
</ws>
<impl>
<command>dhl edit ${nome}</command>
<arguments>${properties.filter((p)=> p.pk == 'true').map((p)=> `
<argument name="${p.nome}" type="${p.type}" required="true" location="path"/>`)}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`
        ],
        command: [
`<command>
<name>${cmd.split('.')[0].replace(new RegExp(['_'], 'g'), ' ')}</name>
<description>${descricao}</description>
<type>Local Syntax</type>
<local-syntax>
<![CDATA[

]]>
</local-syntax>
</command>`
         ]
    }

    return comandos;
    
}