<<template>
<div class="details">
    <span>ID为：</span>
    <p>{{id}}</p>
</div>
</template>

<<script>
import axios from 'axios'

export default {
  name: 'MissionDetail',
  data: function () {
      return {
          id: ''
      }
  },
  mounted:function () {
      var theid = this.$route.query.id;
      axios.get('http://localhost:3000/people',{
          params: {
              id: theid
          }
      }).then(res => {
          console.log(res);
      });
  }
}
</script>

