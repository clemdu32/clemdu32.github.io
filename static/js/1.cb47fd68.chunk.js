(this.webpackJsonpsite_alpha=this.webpackJsonpsite_alpha||[]).push([[1],{281:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(1),n=a(2),s=a(3),l=a(4),r=a(0),o=a.n(r),u=(a(282),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"Message_container"},o.a.createElement("div",{className:"Bordure top"}),o.a.createElement("div",{id:"Message"},o.a.createElement("h1",null,this.props.title),o.a.createElement("p",null," \u2003 \u2003 ",this.props.message)),o.a.createElement("div",{className:"Bordure bot"})))}}]),a}(o.a.Component))},282:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var i=a(1),n=a(2),s=a(3),l=a(4),r=a(0),o=a.n(r),u=(a(284),a(285),a(26)),c=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).animation={0:" animated pulse infinite",1:""},n.handleAnimation=function(e){var t=n.state.visited;t[e]=1,n.setState({visited:t})},n.state={visited:[0,0,0,0,0,0,0]},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"Map"},o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[0]],onClick:function(){return e.handleAnimation(0)},id:"CentraleMarseille"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"CentraleMarseille",severalPages:!0})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[1]],onClick:function(){return e.handleAnimation(1)},id:"MuCEM"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"MuCEM"})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[2]],onClick:function(){return e.handleAnimation(2)},id:"VieuxPort"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"VieuxPort"})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[3]],onClick:function(){return e.handleAnimation(3)},id:"NotreDame"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"NotreDame"})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[4]],onClick:function(){return e.handleAnimation(4)},id:"Frioul"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"Frioul"})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[5]],onClick:function(){return e.handleAnimation(5)},id:"Calanques"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"Calanques"})),o.a.createElement("div",{className:"ButtonsMarseilleMap"+this.animation[this.state.visited[6]],onClick:function(){return e.handleAnimation(6)},id:"OrangeVelodrome"},o.a.createElement(u.a,{type:"VilleMarseille",identity:"OrangeVelodrome"})))}}]),a}(o.a.Component),d=a(281),m=(a(19),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={transitionClass:n.props.transition},n.message="Au del\xe0 des clich\xe9s, Marseille est une ville vivante qui regorge d'activit\xe9s ! Avec ses 300 jours de soleil par an, vous pourrez bronzer sur les plages, vous promener et vous baigner dans les calanques, visiter les rues typiques du Panier ou plus simplement vous poser en terrasse sur le Vieux-Port . Au travers des innombrables mus\xe9es, dont le fameux MuCEM, mais aussi des animations sportives comme la Color Run ou la Run and Mix vous ne pourrez que vous \xe9panouir \xe0 Marseille. Niveau vie \xe9tudiante, pas de soucis \xe0 se faire : avec ses quelques 50 000 \xe9tudiants, du Vieux-Port au Cours Julien en passant par le Rooftop Marseille est une ville qui bouge tous les soirs de la semaine.",n.title="Centrale Marseille et ses Alentours",n}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"MarseillePage",className:this.state.transitionClass},o.a.createElement(c,null),o.a.createElement(d.a,{title:this.title,message:this.message}))}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({transitionClass:""})}),1e3)}}]),a}(o.a.Component))}}]);
//# sourceMappingURL=1.cb47fd68.chunk.js.map