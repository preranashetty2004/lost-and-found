import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false); // Update state
    navigate("/signin"); // Redirect to login page
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABI1BMVEX///8Ac0TMYDz1hjT8//////0Ac0YAc0LMYDq0y78keU3ty8H1hTEAbjnNXz32iDfalH/OakvXgGTKXjT79+/rxLjuycPMZEP4tIf2fybRXTb6yazNWzzUhmlllnnMZz8AYyPm7+q5Yz3SZjnidTny2tNHbkQjdETajHQAZi+WZz3ITBz26eTmrqLJUibK29OJr5uhoaGrZEPYk4bfo5jeoI7muavUdlp5qpPJPAB2dnaJiYm9vb1ra2vo6OimxLRKknE7hF6IaUBVbEOlZzz4vJvjkYPKSA7GXCXVVTjbgHGVwa1UiWXW1tbjrJZqqI0AVg7PRiUxMTFOTk5Ro4D14c13bD9jbUDbcGTlmnH0dg71ml3xnWz1j0XAwLFDZzHTYVBQobdaAAAZC0lEQVR4nO1dC3/axpYXih4DsmQJSVY8EWASq4ZKDGRjJNrmGmjT2AkO3uzW7d325t77/T/FnjMj/AQHgWMnu5yfHzyl+c95nxkdSdKGNrShDW1oQxva0IY2tKENbUiQepMuX+PvK6qqKI87xOXpGorrBCAQhoI/t9/9qklJkvMIyOCEjzzv64agcokBLsyG6SVROrVrWSBTS6bUdV1CgVz6jriUyk7W6nd8I7kCS/laECqXqiAlRvo2C+LjmDEWhkSWCQCxwpwQFbwku5SxOD5mQWZPo0Tl3/xq1AgHcZT40yrCOHHdBoyYABMQAA0JYhCEz2kI3MEnMrALQDFa7fvRkao+IpRLuVBRql6Fx3FM5UCMH3jiOFktq7Zatt0/POwgHR72+7bdatVqWeY4gQtoAaYlyycsPn73vhMlyRWD8aByJ4QD1cO3szhmbgAiRZkVAAK730l3YGze3MkG8ElkpIeHdquaBcAmGqI4sth63zG41KGdm2MIvyAhksg4rMmMWbIVUuY2Zoq9hMFCmJ6XGH5naledkDEwFYTGzGlNdyKchIc1CWrk9zMCg7AsyuLGq8NUTCuOVJnnYa59WThOfKTClPgduwpIULUoC6p2Gj0IFBgn93pJamdc4kGHg1oHhIq/qVx6QkVpdrvd8nA4mUx6M5oMy/Bis3kNFf5DwetncDCXgsSFmd1BPJ+bk/VIHNsDNSHUxWlkGZiihM/xzLICiPKkN6jXT8fjcaVSKem6yUnXda1SgRdPT+v1waTcbV47toKGpOUwRgIw3jSz00T6koZARdFIwASH4DBAZTN0Ezzw4vMrNbvDwRkimI0fAZRKmiD4XwJkM2iA83QEmJpiEpCrClrGqRN/DC3QQuLYxmIsyssff/zxw4pAuIBJUmQH4MsbMj0Opokq5J6Ppls+G1cOdEElJB0GL55o/DkHJcCV8rd0Uz+ojOuTrggiZjI3DX4A/hBK3jmpNzv79eEc/e2lJH348eVqYIADimpkzHVlh3ykdiROwv82h7+1221gQ0nAKESACL5cOStfGnJFTfouuF85IIy9TSTpYsouPvHT69cvXx4d/fR6JSiK4vnBMUUjTKrAfkXoCGjIQNsDIChHKxNwzNz7z/Gg28yPCr/RW4egiWEf34OxvhFjv3559LfXH/5L+vDTCmDQfjmxK1uunPUjSfg0pdkcjgBJrharYxEiBxza086GXa5EKFZJ2grc0AI7U/WT6w745Wvpbx8+/CgdvTwqxhMOxQcBA49i1biNQQKjNdKAJWtguMacEsqo3m5rdYEHeaTuvMogkgMHkBnivDl/XgOYl//9oTAYzEr8FoTuFpNbMEOc4Uq3PKhwLbl3AgbpiEcSyUXUqRHMJHLuzMC8PPoR9L+YmKHaezu2TGX4sQ1PcKpZHoy52f0CWErIJLNdGQy5iUNp88GCYhTeuhQ25SUImvT6w0/LG2euGFHfYTgzrSh3Ys1hvYLS9eXAoMiZpdNeuZlLhmFTBtMZtHwvTwaPXqI9K2TMQKQOM+rKJK7mMit1B6PSvSnKnaSbldGwKcoGSdSKGeis0zLyoR19eP36dTGFOa+C0hPm+Lmx756NtS/Ej5uEHtY8GA+aYla9qMpgVl2ndcOwLU07AQ0bJ+8OE+FVmvUDIQQPAoYLsmYeDLocDfg5cA7gd6qrYZF2GmEjrCV55FXfexj5uk4Qy511xXC81IHcew0wtMbNgKIM9toPj0RQuz3IQwMDvOgaYEIbY+LmUGs/kK7cIjiv1t7rgSNVlB1nLTBuC4SsOdp7JCQXiPbMIcyqsTYYSSpXHhkLkFnHAd0DZ74SMOoGzAbMBkxBMOtbs/9DYOwNmA2YbwPMrI65Tm76yGA0gcNsm6UKVpjH44qGz1arHjw2GI2XJkY9XvsXVB726mOI6c3CSd6jg9Hb496sSpmT0mw2u1jdaRdE89hgzIOhKE/ypRuxfKPOEA3aDwzGD1yyGhjgSqk94sUINV/wyBfLZnwq7xU74iOCAe1vnwkI1w95Ucb7hsDoenuQL0Uo3bMRLqGNf5t0r6jPI4FRi4MBM1bhi59Kc6Djikde5dfPLhb/HgEMXQkMrnB0kTHN4UH76lf1dntUbq4HpvbQYEqjAa8aDkz9hs3STZ1X9b4ZMFppzOt2CmK5DkbHkOC0uxoY6VE4o096TbQb7flfa582JXVVzlgPDMYcdSdYvh8tKuei1f5mwPSaqOXNhStrerv7rYDRK+UuLoR3Fw/XPPtWwJinTQFmYaUdXOrKEcBDgxlIHExzgf7j5o12+Q6+LQLz8NZM08ye1B3eaQB0zRyuAObh/Qw4/4nU7KGbHy5kDdiIbwNMSRuCu0QwzfpCNGb9DqSLwDyCmJWAM1Kvi2Fms85DgHlZmF50ofeRwhnQGak74Luqmr0Dc8G2mqJJxX2AsVaxZsCUszI/QrMLonYv69P3AEasaRYBA4HkGALJJubMYm/KaM/kAeZ6tbe1wYgF2sLLgOYQaxgIiWeWSne8B5HNmvzhYCBbXAcMaSFnxsXAjFH9ldGZkuf8Svc3c93dXGjNFD8gpLUimMgJ3VpxMKV2nWeT5fGwyTdeIqjhuLSWoHHTnAaua68IJgEwVRhOtxgYTWv3FL6BZ3I2q5whe84q+urlZgHGkll/VTBZ6GYegDk1C51YK7WH+V7UntgIJ551e6eVFXfc6foADnBIZdZZA4zjcedXDIxW2uvl+6eU4dmke8Ge5rA+Xk159IkAE6crgvGqIXWS4mCQ2vW8DAPyNZnk7FH4NsLKCnD0gyEcqk+D2LhzyHdQLaRBpGBlovDZS2ZpMIODe9Enw4sn5VHxPUWQ8UmKagNnolXB2OGJ7MP/wUqCbs62XvNqYLnX687gnBWMMhEMfNlrUfk4WTzcu6lPCUUZ7RWPpUpoB/QKF7a8uNnt5RvhgNUFEwA4EhwnqYZWvCoWKWWBewj/h6uuA+r6wZjnNnkscDZQOLTFiduiA43h+1FmuXRFKKoUuRZtCUezajSCq5kjceUCep6yiA6kZsEUAMAo0g74vWzFLZqqkshuWEXbfLpyMAJBmWbuaZMZe5qjCY9yusXUxkQ3k1KL9Ve+bFBpwFSA+VBWsM3XIbXbg25+KXBvKP4VOKSumZBSqFPXOt65ueKzNGukaug2duDRKrb5Gml6Wxs0hSUYlPF/VyuQV2htNGY2tcAyrwxmyiwX44fhQUF9vfUCULuSmzZeVm8WmCAQVbzSrUotd+WLoyEbimWKa2fdIuYMr1iagw7SfnPAl226v2EcWjbnVgfmkWaO4GtGQGh1VcYAGO9YprUEU60Ccmae9haF2WadO84BJtXdytKr59reBPx/CmHmdHUwqkIJQQsgFfEL5mBRMAeGjac6TZzo7nh5zux1JdXrM5kZK1+OCjm8zSw5BRYNi3BmIRiUtSFq/whr0aOlweimUBmZJutc7ZiC0hxiXaJAbAizP1hcy6zjOtQZLnnUl/bE5m/wnQjSzKq3OhQwh4xQfjVAgWQTxjtZGMvx2o00HGLKtzSY9hBUxgcp66x1FaqSsTAwAMxgedYAmMWJtq5x5e8VETO9Ddz0bAbJzKxGshpNY9lNVQim2ktf8QdglNNb68yzgellVH4Es7SFNEd46W5AibNy/C84EzHi2niMyvISDmoxNBd8Wi8NwSBxMEv7rj3Ar/gxBGZrqQwoTeYSB43zZOltSFzHF8XZKGaqVAa/MVlWcPVSEwxri8mrp8w5Z9QOs1gq7NmSM4liJpUXYNe5AYBIYOnCgt7GKnzi5pO6FpoI4u4WyJm6tN8UjnEwf3uceHMEzFkyodFKGGRKfiyvLWXgq967VhiBnJeXvYgm9/Knc9GYPJ0ZQRCwJGMgLgOpVSFjJv7a3Q7UNLbiqaqozWUVloMB+zdu31pp0sRek2G5QFLRHkJYFTEZr35bEwzkzoRQxwN7sqzGCs6g7b3JG73Ey1/Sb9Jw6T2aQslscN44o+uhUaXEZvKxUSCdmoHBktJ1zvAtdZJUHnbbS2+f5XVrj4GTMe6jg4vvWidVTN977aV89gUYSRny2jJ3txpmmxPuwM8mS/NFw+ofuO5jy7XvpaFGUssLicCaYmAwnxwf6Pm+7MpYlM16o0Uedd7BcFHRa9AwWLXIfINSYp28lZbOdK+C4cXl0SlQfXYpbHm8fF8HzRSMeWe51fVCmQuKslCO8VjLRSBXwVzsY27OWrmUiyStumBM5lq0c0+NW9S+azGbF1aWGYh5Ws475fD184sol1eYhkWwiHq5lMoYY95LyyMV1wNhalBrllqq1bXxuD4Y5u0wrlG3V2w9Q8dyLugsAcbcS38g7GnVpwF7izN9ttS8gsq32+ZYNP652JfdHPYKrjTx2j8whoSBd1/dgVTpPJRJgDHrslVn3soBG/+MsZdRrzfsDeqnFbNQLRFLU+jnsPaf3l+nIyxsBG4L+/71ipXQ9RnB0Iou8sA3sAdIig007rFHGOR5tBHKPoBpVoqNqCSaGq3UE2EPY58oc+U4vc+GZ6r0Kg7cGvaZKu+t0DJHW2G7CZYxQV0PmUyz+8SiqIpHXMvlTrhuPkTrCexNhUUpA0J/Fin32QBRxeyI0CzC0sbyNeK1wGB9Cc0ypP7q/XZzBN2vskDkesOlE+h1wJhYKFRTZlHIltX7bhIY0dCiPhagB4UXi4sTLxYqEaEyTe+//5yiTlkIggZztHTKuzrpOlakvPeQk7XuJ8K8kdglLSozG6W3nAcl2syRlK61BeNN8/hf8aZ+lXjjuav5tJanO6Jh0uzqzgFq/zQGS3atJHNxBVthUl+9tYH6fWxSmvp+H5tD+omnKpPLkV42+9NN/QbN+gFepZufybMdPXdG4pA6FjGS6J0rk5Zv+Gmnc9jvv4KxvG2tWm7yMso7yFoyIQ0iB4FMGjTIkJ4/f/P99z///PPvf/zyy3cHBwcwygPh5DUtXwWc4c1dDP/lnNFKs66HJZGHVuD34OC7X3754/ff4Zjff//m+XM8iUODwAocWcYeqIT3gqXHqxYCvYzkB7LCEB8Q+Al5i1wLjkuJZVnILP4rB8+f/wcSoPz+59+B/vgDkV6jX4D+gCH/DiP+/s0b/vnnzwMyIxkPCDOI7RpdNwwsOAWcGE9I+FislauaWJrlJ7AI7/TLj2fxR5T3YKZUJnKj0SCBix8IsQ8Zzp+Fb4ViKuEBvaSLx3lzYDgSjBxOgNMFHyf4J7Bchs2R4WT8xDiPspi4dcCI6bhNhDh2mvYzmZ8SqGGBDIp3TrDXL8G+zBbnGnykwaHBawg3wG/AhLuCkPEEvh00giBw/h24RKbVfqfvzD01WR7MDYO+EAwNctsfTSE+h3FlSRTZBOE400PbkQNs3mW3nKxWrWagc061WsssKme1WlXGHtRu8AoJtLrlUIA5TTzRRdjb+btLqiruxph35qU5c8vsgQGYzxY5lbzI9/0ENxogEzJJ8V5RDsaTImSXayVSkrUSTOzQV6iJHRArVdUIwclX6hOJ7Vof+yoYLyQsXoaZp3SYNRfNTTCLGr+rqneDqnPByCHY/pQcH9Nq6nOpjn3Ibn0h24lkHPOzRoCKTVXJYLI7ldQpBZ3yxTorcsaQEj9NU4NPCLgvyXYyJwh8VQqA0RLEMXPPzYwbY1wQtSnq+dPr5Mw9Hgfj17LAjSkkG7JF/w7zqaBPFWBiRMUSKQJ18FWlxWqeZDgWBKrY6LeD+F3HkAzCwBLYwEoHwVRjStkPgD6jCIZa80SchP9zfYjPFmzZgDj/6e5V2noRzDughZVSlArD6DsMjCewPgKxwVEKzmDH4GMAQ0F1EiWBjyM/LJZKkQ/C54ok3HAImogUC8AtT5piH/F+pHgBfEnyw7n6Sqz9qyP886/zBZyBENL7dXfryQVtv5g7O6AQtdwPqwaWtKqe9NaFUVbBNAWgKngrABi1FDHC459IVTsgZCEBBYJRH1phI2wYuH0M9A+ycbUfv/ekBMmT1I5LBJh5ckbk/csBbu3+I1EX6oyieM+2t66ACedbM0LBMvtR5KEqcMb88EPLU/oI5qK1uQJgAPlxii14LbeBVYkEOQKsATA+BwMC11IhBoP5UBGKZLRkN4SgH5RxLhhr/3KyAYuyeGEA4Tzb2vosGCtwGTgHyDQUI0SNONoxIk+JHPAiHgwyqwJ5Aowcg6AB/8ARAgt+OIYg2LbIJRgZOcMyEDP6At4zXApiBmAa7gIwW5dY1DuwCDrffrJ7JxiIndMdK6ZuDDJlEDBbqid8lO2+a3iYk7rwJoCJ0ZseR1ICmLAqkZ8hsUC+QH/A8ocy7UA4HsKR0phg8tehLu482Jmrrpdgtp7sPr0TRi4e55+27gTTQGvm+f1XKeiH/RHM0Xu8SQNOK3UDBIOuiAkwBPe7IRhiwQv8nhpghd3gBYBx0DPB14EbMoIB8YXk7xULg53Pg9l9ukwuoErnn3bvAkOsLOX9KBU1OWQgEsm7E7RfMJD3uN2eg7EQzDF+GDkD8s8OJc89juPjgD8HMUuM1EdoYNMpzIGBLVlxmuAgBvhWusCacTBbn54tVRZEM/AXN2o5GDKLMS+OSFnQ9w3DP8yYZYPhQimSKYQkKbgI1ccu/1bgcWsmk48w+IygI0Rw4IDAzvUJTD42Tce7A9SYTKpR5PMQeWr4U9eZTvvZlYnkt6sQTzmYra1P5zdTxwViBh969ucVzmBUK9/QRsI4gfOwaChizKAGeZxTnU5tiNyJW03TDogKhG6QXb0H5+gbKVh6wDk1dlKn0cebUkz7/SpF9+gEbsgDJTwowaNfnT2LE2dMyDmz+9RbrvqkXmgN+JnZkQQilzEevuMs8WNzXDLPNWD8OI6QYY9Y0pBDFjPxNuXjI/gXD8c/EmIjfngFflxkCBGDFX/yO4tQvHUIzZHkaEJ5W0jZr0tU0jHeUJ/lFmD7yT5MrHuyP6Mqv7UHhFANGEuM99CwAjgHJlLoFRqyFRIOjnMSx4hPRYIli9BNzAoMyuKfyD9IIL8RyZfLj0tJ4GRZDe8scnHy/Rdw+Bf7M3/5FNHciQeLbd7T7a3tmS3f3yfhhZ/a/dXjbpqHt2CZ/PQ9wJGtauZYEL/E7y7TrzwJs8L8QZ7LQcZIrxJ+4+NxTCE5bmGeQ5jt++ImQpGICIw8JNnef2FZ+/sXA9va/Sv5TDlNQSy7T66ENIDnxWw+dn9VL/rOCy4mNXCe4NWP8MT//OVf32FOjCkxz4rf8KT4KmFW/eaNeP9nnln/61/f/ZOPugNa4jZSL09EVHE7CyniYLa2TwKyf3VU4Gf+Opc+cwee5B+AZfvJkxtw9jHK2f1VmblcfvcPeJi8grzjhG/kVpTuqI31Cu3g4EA/+CyJElN7LC4U6NBQdmVfHFfJb50Ep+NgtvZdef/6oGA8aJ7vAKNcuJgbtE/d/a2t3V9vr8V5/RMSyqyv8hhgUqQNMtad9uq897f3irkBDW5lkZDL/QlQTsL9eaNCUVkEB5K2ZxD3z6d9ur89D4wCIWEY0LiV8O7jXW15NICF7z6BiLQK9g0d5s2RcTD7L/YXDGrrTzADC9Coz7a259IT/PNpf+s2GLQYkAbIAQOvza8lGRwsD4fvGIKYGnvCQzg0T53Pdz/t8/M/uT2sT5+2t54u2rblPTt/diedz/G68EqE9w2gYUe0Hy/Xsej3GUC6VjLHk/xmNhYNqAyCets4qUpy13Dw53xRpildtFW7SpefWGA8FK8PobTLWga3/E2+qPwZNKaG16DAKSMbUzhn/p6F6+sy88e2KDm7uBPezFhJSv6IW5bFSz54AxSIzhodznSlO9DvXifQ2+MhVsYl1c/AuPNpmOszlMvB8CEo0tXxiUcLhnTjHoXS9RsU3rHfA0TNdgVzxJ0QuvX24kt/dVMbimvSo76L/rSfLJziy3PfGNLsyf3fPUjlre5RjZ1+woWjORy153IHlMU86/L7Yqj8fiNsdsucr4X4PUmiFnMb1Kr5qMq4IaMyb4XNbI/yjm2JLYeQf7ciVXrMG9DNIZUrAPv4b5cRvtkW4Uy0PVzRyJc4xOVNY355E4w/dSAkO4k7KPhfy50OrxLEajEJIBeYeqLNZHOit7W8yZmOjTUrw3w3P2SSodWIw3vaRXb/hLqy42Do+ZFN8zBOGY4PBBrTPBjlV9CqSesYUzByuM5lCl+YeAZx6EA2QuLAz9VaKY/GEORovB0dV65kyj5CniS/xVLi1yhhnFRek09s0AZxq6XctHZ79Xp++xWwE9OAkYDSqp/fLvHrJsWwwaqBoary2/zhmGe7zrxo6rAQcuKs89VqyzUCZniGbTEC6Wc2jbzL6U+MfsBc8K1OJ/rS9/67TwI4oOAyZY49uxNWlNoBvhQ7h/l9Gb8NMJgzJZFNwcETZtU6kZr4dpXEhNCYM+vbgDEjdKJedGiBVOFNC6vVwKXg7+MsTVTpdo73dVNel0jSxrEbECwmWRb7WDU89RvSldt0nh0zl9Awdu3k20XBid/37dBxrRa/59vnikNfOXGhUvkt36RvT1s2tKENbWhDG9rQhja0oQ1taEP/z+l/AfrCPlOaqmOdAAAAAElFTkSuQmCC" alt="SCEM Logo" className="logo" />
        <span className="title">LOST AND FOUND PORTAL (SCEM)</span>
      </div>
      
      <ul className="nav-links">
          
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
          <Link to="/report-form" className="nav-item">Report Item</Link>
          </li>
            <li> 
            <Link to="/Lost-item" className="nav-item"> Item</Link>
          </li>
          
          <li>
            <Link to="/Profile" className="nav-item">Profile</Link>
          </li> 
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout} className="nav-item auth-link logout-btn">
                LOGOUT
              </button>
            </li>
          ) : (
            <li>
              <Link to="/signin" className="nav-item auth-link">SIGN IN</Link>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
