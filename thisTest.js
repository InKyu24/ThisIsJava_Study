const player = {
    name: '손흥민',
    message: `I'll do my best`,
    say: function () {
        console.log(this.name, ':', this.message);
    },
}

player.say();

const team = {
    name : 'Tottenham',
    members : ['손흥민', '해리 케인', '델리 알리'],
    message : `We'll do our best`,
    say: function () {
        this.members.forEach(function (member) {
            console.log(member, ':', this.message)
        }, this);
    }
}

team.say();